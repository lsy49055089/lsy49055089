from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from collections import Counter
import json
ROOT=Path(__file__).resolve().parents[1]
DOCS=ROOT/'docs'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.links=[];self.images=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id'in a:self.ids.append(a['id'])
  if tag in ['a','link','script']:
   href=a.get('href',a.get('src',''))
   if href:self.links.append(href)
  if tag=='img':self.images.append(a);self.links.append(a.get('src',''))
errors=[]
for f in DOCS.rglob('*.html'):
 text=f.read_text();p=Page();p.feed(text)
 if len(p.ids)!=len(set(p.ids)):errors.append(f'{f}: duplicate id')
 for href in p.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=(f.parent/unquote(u.path)).resolve()if u.path else f
  if not target.is_file():errors.append(f'{f}: missing {href}');continue
  if u.fragment and target.suffix=='.html':
   q=Page();q.feed(target.read_text())
   if u.fragment not in q.ids:errors.append(f'{f}: missing #{u.fragment}')
 if any(not i.get('alt')for i in p.images):errors.append(f'{f}: image alt missing')
 if '<title>'not in text or 'name="description"'not in text:errors.append(f'{f}: metadata missing')
data=json.loads((ROOT/'projects.json').read_text())
assert len(data)==14
assert Counter(p['kind']for p in data)=={'design':7,'verification':2,'embedded':2,'ai':3}
assert len({p['id']for p in data})==14
assert len(list((DOCS/'projects').glob('*.html')))==14
assert len(list(DOCS.glob('qa-*')))==0
assert not errors,'\n'.join(errors)
print('PASS: 17 HTML pages, 14 project pages, local links/fragments/assets, unique IDs, metadata and category counts')

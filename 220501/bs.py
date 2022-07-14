from bs4 import BeautifulSoup
import requests

url="https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC"

res=requests.get(url)
#print(res.status_code)

html=res.text

soup=BeautifulSoup(html,'html.parser')

titles=soup.select('div.news_wrap.api_ani_send > div > a')

data={}

for title in titles:
    data[title.text]=title.get('href')

with open("data.txt","w", encoding='UTF8') as f:
    for title in titles:
        f.write(title.text)
        f.write("\n")
        f.write(title.get("href"))
        f.write("\n")
    f.close()
    

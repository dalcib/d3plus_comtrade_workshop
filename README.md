https://comtrade.un.org/api/get?max=50000&type=C&freq=A&px=HS&ps=2018%2C2017%2C2016%2C2015%2C2014&r=76&p=699&rg=2&cc=AG2&fmt=json

https://comtrade.un.org/api/get?max=50000&type=C&head=M&px=HS&freq=A&r=699&ps=2018%2C2017%2C2016%2C2015%2C2014&p=76&rg=1&cc=AG6&fmt=json

                 ,"max=",maxrec,"&" #maximum no. of records returned
                 ,"type=",type,"&" #type of trade (c=commodities)
                 ,"freq=",freq,"&" #frequency
                 ,"px=",px,"&" #classification
                 ,"ps=",ps,"&" #time period
                 ,"r=",r,"&" #reporting area
                 ,"p=",p,"&" #partner country
                 ,"rg=",rg,"&" #trade flow
                 ,"cc=",cc,"&" #classification code
                 ,"fmt=",fmt        #Format

                        ,maxrec=50000
                         ,type="C"
                         ,freq="A"
                         ,px="HS"
                         ,ps="now"
                         ,r
                         ,p
                         ,rg="all"
                         ,cc="TOTAL"
                         ,fmt="json"

    {
      "pfCode": "H4",
          "yr": 2016,
      "period": 2016,
      "periodDesc": "2016",
      "aggrLevel": 2,
      "IsLeaf": 0,
      "rgCode": 2,
      "rgDesc": "Export",
      "rtCode": 76,
      "rtTitle": "Brazconst il",
      "rt3ISO": "BRA",
      "ptCode": 699,
      "ptTitle": "India",
      "pt3ISO": "IND",
      "ptCode2": null,
      "ptTitle2": "",
      "pt3ISO2": "",
      "cstCode": "",
      "cstDesc": "",
      "motCode": "",
      "motDesc": "",
          "cmdCode": "01",
          "cmdDescE": "Animals; live",
      "qtCode": 1,
      "qtDesc": "No Quantity",
      "qtAltCode": null,
      "qtAltDesc": "",
      "TradeQuantity": null,
      "AltQuantity": null,
      "NetWeight": null,
      "GrossWeight": null,
           "TradeValue": 684747,
      "CIFValue": null,
      "FOBValue": null,
      "estCode": 0
    }

{"pfCode":"H5","yr":2017,"period":2017,"periodDesc":"2017","aggrLevel":6,"IsLeaf":1,"rgCode":1,"rgDesc":"Import","rtCode":699,"rtTitle":"India","rt3ISO":"IND","ptCode":76,"ptTitle":"Brazil","pt3ISO":"BRA","ptCode2":null,"ptTitle2":"","pt3ISO2":"","cstCode":"",
"cstDesc":"","motCode":"","motDesc":"","cmdCode":"010511","cmdDescE":"Poultry; live, fowls of the species Gallus domesticus, weighing not more than 185g","qtCode":5,"qtDesc":"Number of items","qtAltCode":null,"qtAltDesc":"","TradeQuantity":16919,"AltQuantity":null,"NetWeight":null,"GrossWeight":null,"TradeValue":549423,"CIFValue":null,"FOBValue":null,"estCode":4},
{
"pfCode":"H5",
"yr":2017,
"period":2017,
"periodDesc":"2017",
"aggrLevel":6,
"IsLeaf":1,
"rgCode":1,
"rgDesc":"Import",
"rtCode":699,
"rtTitle":"India",
"rt3ISO":"IND",
"ptCode":76,
"ptTitle":"Brazil",
"pt3ISO":"BRA",
"ptCode2":null,
"ptTitle2":"",
"pt3ISO2":"",
"cstCode":"",
"cstDesc":"",
"motCode":"",
"motDesc":"",
"cmdCode":"010511",
"cmdDescE":"Poultry; live, fowls of the species Gallus domesticus, weighing not more than 185g",
"qtCode":5,
"qtDesc":"Number of items",
"qtAltCode":null,
"qtAltDesc":"",
"TradeQuantity":16919,
"AltQuantity":null,
"NetWeight":null,
"GrossWeight":null,
"TradeValue":549423,
"CIFValue":null,
"FOBValue":null,
"estCode":4
},

    http://dataviva.info/en/trade_partner/asind/international-trade?menu=new-api-exports-municipality-stacked&url=secex%2Fproduct%2Fvalue%3Fvalues%3Dvalue%2Bkg%26group%3Dproduct_section%26depths%3Dproduct_section%2Bproduct%26type%3Dexport%26wld%3D361

# D3plus COMTRADE Workshop

Download this directory as a zip OR if you have git installed locally, clone the repository:

```bash
cd /some/directory/
git clone https://github.com/alexandersimoes/d3plus_comtrade_workshop.git d3plus_comtrade_workshop
cd d3plus_comtrade_workshop
```

In the same directory that you downloaded or cloned this repository run a local web server. For macs python is preinstalled and probably your easiest option. For Windows users, you should first download python. From a terminal enter the following commands to run a python web server:

```bash
python -m SimpleHTTPServer
```

Now, in your browser, navigate to http://localhost:8000/ and open the files in a text editor of your choice. Go through each of the links on the index page sequentially and try to fill in the exercises in the comments.

If you get stuck you can always sneak a peek at the solutions, which are in this same repository under a different branch: https://github.com/alexandersimoes/d3plus_comtrade_workshop/tree/solutions

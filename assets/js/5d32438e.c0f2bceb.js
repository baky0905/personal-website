(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/diagram-d1cb77fe03b6d9d7184b32c6f196dcb2.png"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/event_hub-916cca2f12c82f13c6be1433f550c151.png"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/events-to-cosmos-func-8b122050ad988f24a375c38015343d5e.png"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pbi-visual-e65d90f2608172a7b76d03ce378d9c8c.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(111)),i={title:"Data Engineering Project - Azure Event Hubs, Function and Cosmos DB - Part 4",author:"Kristijan Bakaric",author_title:"Mr.",author_url:"https://www.linkedin.com/in/kristijanb/",author_image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQF-5oI5fHJPjw/profile-displayphoto-shrink_800_800/0/1606336983715?e=1620259200&v=beta&t=VvBP6s8IMDUwKDfvj6B3c-gGmN3IfioALIAboXg_DGE",tags:["dataengineering","projects","azure","python"],hide_table_of_contents:!1},s={permalink:"/personal-website/blog/2021/03/08/data-engineering-part4",source:"@site/blog/2021-03-08-data-engineering-part4.md",description:"Valid tweet data is flowing into Azure Event Hubs and then being picked up by Azure Function and writing each message to Cosmos DB. In the final testing step, I query the data from Cosmos DB with Power BI and visualize tweets with a set of simple charts.",date:"2021-03-08T00:00:00.000Z",tags:[{label:"dataengineering",permalink:"/personal-website/blog/tags/dataengineering"},{label:"projects",permalink:"/personal-website/blog/tags/projects"},{label:"azure",permalink:"/personal-website/blog/tags/azure"},{label:"python",permalink:"/personal-website/blog/tags/python"}],title:"Data Engineering Project - Azure Event Hubs, Function and Cosmos DB - Part 4",readingTime:4.09,truncated:!0,nextItem:{title:"Data Engineering Project - Azure APIM, Azure Functions, Blob Storage - Part 3",permalink:"/personal-website/blog/2021/03/07/data-engineering-part3"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 1 - Azure Event Hubs",id:"step-1---azure-event-hubs",children:[]},{value:"Step 2 - Cosmos DB",id:"step-2---cosmos-db",children:[]},{value:"Step 3 - Azure Function: Triggered by Azure Event Hub and Write to Azure Cosmos DB",id:"step-3---azure-function-triggered-by-azure-event-hub-and-write-to-azure-cosmos-db",children:[]},{value:"Step 4 - Plug the data into Power BI Desktop",id:"step-4---plug-the-data-into-power-bi-desktop",children:[]},{value:"In the Next Post...",id:"in-the-next-post",children:[]}],u={toc:c};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1575612711678-7e781546adf8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Valid tweet data is flowing into Azure Event Hubs and then being picked up by Azure Function and writing each message to Cosmos DB. In the final testing step, I query the data from Cosmos DB with Power BI and visualize tweets with a set of simple charts.")),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"In this post, I will cover the section of the pipeline that goes from event Ingestor - Azure Event Hubs to writing messages in a No-SQL CosmosDB, and finally querying the database via Power BI Desktop  connector with a few simple charts."),Object(r.b)("p",null,Object(r.b)("img",{src:n(164).default})),Object(r.b)("h2",{id:"step-1---azure-event-hubs"},"Step 1 - Azure Event Hubs"),Object(r.b)("p",null,"Let us first define what is Azure Event Hub and why do we even need it?"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about"},"Event Hubs"),' represents the "front door" for an event pipeline, often called an event ingestor in solution architectures. An event ingestor is a component or service that sits between event publishers and event consumers to decouple the production of an event stream from the consumption of those events. Event Hubs provides a unified streaming platform with time retention buffer, decoupling event producers from event consumers.'),Object(r.b)("p",null,"For more information, please check the ","[Microsoft Docs]","(",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about"},"Event Hubs"),")."),Object(r.b)("p",null,"In the Event Hub I created, I chose two partitions with message retention of 1 day. As you can see from the service, you also have a lot of extra functionality to choose from which I decided to ignore for the time being, like using Capture events to save your events to persistent storage (that section in my pipeline is taken care of by Azure Function which writes the messages to blob storage). Then there are also options to do checkpoints and processing of data."),Object(r.b)("p",null,Object(r.b)("img",{src:n(165).default})),Object(r.b)("p",null,"To define important concepts of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Partition count: Partitions are a data organization mechanism that relates to the downstream parallelism required in consuming applications. The number of partitions in an event hub directly relates to the number of concurrent readers you expect to have. Learn more about partitions."),Object(r.b)("li",{parentName:"ul"},"Message retention: Message Retention customization is not available in a Basic Tier Namespace. Please upgrade your Namespace to access this feature. ")),Object(r.b)("p",null,"Event Hubs s a fully managed Platform-as-a-Service (PaaS) with little configuration or management overhead, so you focus on your business solutions."),Object(r.b)("h2",{id:"step-2---cosmos-db"},"Step 2 - Cosmos DB"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/introduction"},"Cosmos DB")," is a fully managed NoSQL database for modern app development."),Object(r.b)("p",null,"Cosmos DB has several API options to choose from like key-value, wide-column, graph and document database. Since the documentation recommended that new projects that are being created from scratch should you the Core (SQL), that was obviously my choice."),Object(r.b)("p",null,"The capacity mode when creating the Azure Cosmos DB account was set as Serverless (which is still in public preview)."),Object(r.b)("p",null,"Simple configuration is as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1 database ",Object(r.b)("inlineCode",{parentName:"li"},"hurricane")),Object(r.b)("li",{parentName:"ul"},"1 container ",Object(r.b)("inlineCode",{parentName:"li"},"tweets")," partitioned by ",Object(r.b)("inlineCode",{parentName:"li"},"account_id")," key")),Object(r.b)("p",null,"Azure Cosmos DB has a nice data explorer tab that is available in the Azure portal when you create an Azure Cosmos DB account but also check out a standalone web-based interface that allows you to view and manage the data stored in Cosmos DB under a name ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/data-explorer"},"Azure Cosmos DB Explorer"),"."),Object(r.b)("p",null,"After sending 10000s of HTTP requests to the API endpoint, it is evident (see figure  below) after querying the tweets container via data explorer, that messages are successfully written to the database."),Object(r.b)("h2",{id:"step-3---azure-function-triggered-by-azure-event-hub-and-write-to-azure-cosmos-db"},"Step 3 - Azure Function: Triggered by Azure Event Hub and Write to Azure Cosmos DB"),Object(r.b)("p",null,"In the previous step I have already tested the function I am going to describe in this section because it was a dependency needed to write the events to the database."),Object(r.b)("p",null,"By its nature, it is a very simple Azure function that has a trigger to respond to an event sent to an event hub event stream, when the function is triggered, the message passed to the functions is typed as a string, and written to a binding defined as Cosmos DB, hurricane database and tweets container/collection."),Object(r.b)("p",null,Object(r.b)("img",{src:n(166).default})),Object(r.b)("p",null,"Configuration as defined in ",Object(r.b)("inlineCode",{parentName:"p"},"function.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "scriptFile": "__init__.py",\n  "bindings": [\n    {\n      "type": "eventHubTrigger",\n      "name": "events",\n      "direction": "in",\n      "eventHubName": "hurricaneevenhub",\n      "connection": "hurricanetweet_managehurricanetweets_EVENTHUB",\n      "cardinality": "many",\n      "consumerGroup": "$Default",\n      "dataType": "binary"\n    },\n    {\n      "type": "cosmosDB",\n      "direction": "out",\n      "name": "outputDocument",\n      "databaseName": "hurricane",\n      "collectionName": "tweets",\n      "createIfNotExists": "true",\n      "connectionStringSetting": "hurricanecosmos_DOCUMENTDB",\n      "partitionKey": "account_id"\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"step-4---plug-the-data-into-power-bi-desktop"},"Step 4 - Plug the data into Power BI Desktop"),Object(r.b)("p",null,"You can easily visualize Cosmos DB data in Power BI by using the ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/powerbi-visualize"},"connector available in Power BI"),". "),Object(r.b)("p",null,"After connecting to the data and creating a few charts we can see the result on a screenshot. The figure shows the number of tweets, their locations on the map, together with the most common damage flags, and a table with the actual tweet messages."),Object(r.b)("p",null,Object(r.b)("img",{src:n(167).default})),Object(r.b)("h2",{id:"in-the-next-post"},"In the Next Post..."),Object(r.b)("p",null,"Prototype for the streaming part of the data pipeline is done :)"),Object(r.b)("p",null,"In the next post, you can expect a walk through a Python Streamlit web app, that I will host on Azure App Service."))}l.isMDXComponent=!0}}]);
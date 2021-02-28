---
title: Data Engineering Project - Intro - Part 1
author: Kristijan Bakaric
author_title: Mr.
author_url: https://www.linkedin.com/in/kristijanb/
author_image_url: https://media-exp1.licdn.com/dms/image/C4E03AQF-5oI5fHJPjw/profile-displayphoto-shrink_800_800/0/1606336983715?e=1620259200&v=beta&t=VvBP6s8IMDUwKDfvj6B3c-gGmN3IfioALIAboXg_DGE
tags: [dataengineering, projects, azure, python]
hide_table_of_contents: false
---

![](https://images.unsplash.com/photo-1584033844021-260872c289d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)


> The Main goal of this post is to introduce an Azure Data Engineering Project where I will prototype streaming and batch processing data pipelines, with the main purpose to ingest and process data that consists of tweets and satellite images extracted from Kaggle datasets.

Personal motivation for this project is to explore Azure in the light of data engineering and its service offerings.


<!--truncate-->

## Introduction

The upcoming posts will consist of writing about:

  - Python functions and modules that process the data from Kaggle, combine tweets and satelite images into a single file acting as a source of streaming data, and building a python program that will send requests to an Azure API endpoint. 

  -  Azure streaming data pipeline that:
       - Ingests tweets from the local source client via Azure API management having an Azure Function as a backend.
       - Utilizes Azure Event Hub as a message queue service.
       - Azure Function that takes messages from Azure Event Hub and writes them to Azure Cosmos Database.
  
       - ![](./2021-02-28-data-engineering-part1/streaming-pipeline.png)

  - Azure batch data pipeline that will take daily tweets in a form of csv reports, process them and store them to the same serving data store, Azure Cosmos Database.

  - Python Streamlit Web App (acting as a prototype) that sources data from Cosmos DB, and visualises it in a set of insightful charts. It will be deployed on Azure Web App Service. 

## Data

![](./2021-02-28-data-engineering-part1/data.png)

Data for the project consists of:

- [Hurricane Harvey Tweets](https://www.kaggle.com/dan195/hurricaneharvey) from Kaggle.
- [Satellite Images of Hurricane Damage](https://www.kaggle.com/kmader/satellite-images-of-hurricane-damage) from Kaggle

:::note
 Since there is no apparent real relation in the data between tweets and satelite images, for this project, I decided to mock the relation and randomly assign ids from images to tweets to create an artificial relationship.
:::


### Hurricane Harvey Tweets

Tweets containing Hurricane Harvey which spans from morning of 8/25/2017 to 8/30, as well as the properly merged version of the dataset including Tweets from when Harvey before it was downgraded back to a tropical storm.

The dataset has 7 columns, of which the first is just the index. The rest are as follows...

  - **ID** - Twitter ID

  - **Time** - Datetime stamp of tweet
   
  - **Tweet** - Text content of tweet
 
  - **Retweets** - Number of retweers
 
  - **Replies** Number of replies to a given tweet
 
  - **Likes** Number of likes of a given tweet

Example of the table:
![](./2021-02-28-data-engineering-part1/tweets-example.png)

### Satellite Images of Hurricane Damage

The data are satellite images from Texas after Hurricane Harvey divided into two groups (damage and no_damage). 

Source: Data is originally taken from: https://ieee-dataport.org/open-access/detecting-damaged-buildings-post-hurricane-satellite-imagery-based-customized and can be cited with http://dx.doi.org/10.21227/sdad-1e56 and the original paper is here: https://arxiv.org/abs/1807.01688


Example of an image, and the directories together with the image files:
![](./2021-02-28-data-engineering-part1/image-example.png)


## In the Next Post...

In the next post, I will introduce Python functions and modules that process the data from Kaggle, combine tweets and satellite images into a single json file acting as a source of streaming data, and building a python program that will send requests to an Azure API endpoint, where each request will be a single tweet with a predefined schema. 


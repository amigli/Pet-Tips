# Pet Tips :paw_prints:

Project of course **Basi di Dati II** - University of Salerno.

## Introduction
*Which side are you on? Dogs or cats?* :dog: :cat:  
With **Pet Tips** there is no difference! Filter the dogs or cats according to your needs and add it to your favourite collection. You will be surprised at how many dog and cat breeds exist :eyes:.

## Repository contents
This repository contains:
+ **data_cleaning_scripts:** all scripts used to create the *Dog Breeds dataset* and *Cat Breeds dataset* contained in **dataset** folder. Refer to sub-folder **cleaned_datasets** for the final dataset obtained. 
+ **statistic_analysis_scripts:** all scripts used to do descriptive statistics on *Dog Breeds dataset* and *Cat Breeds dataset*. The resulting plots are in **plots** folder.
+ **webapp:** the folders for **backend** and **frontend** realized using the MERN (MongoDB, Express, React, Node.js) stack.

## Prerequisites
To build and run this project you should install:
+ [Python](https://www.python.org/downloads/) (v. 3.10+)
+ [R](https://cran.r-project.org) (v. 4.4+)
+ [NodeJS](https://nodejs.org/en/download/package-manager) (v. 20.15.0+)

## How to run the Project
Follow the next steps:
1. Clone this repository
2. Create a new database in MongoDB. Create a **Dogs collection** and a **Cats collection** using data from the **dog_breeds.csv** and **cat_breeds.csv** files located in the **dataset/clenaed_dataset** folder.
3. Create a **.env** file into path **webapp/backend/** with follow content:
    > PORT = *choose_a_port_number (recommended 4001)*  
      MONGO_URI = *paste_url_to_database*  
      SECRET_KEY = *insert_a_key*
4. Open a new terminal in **webapp/backend** path and run:
   > npm install

   > npm start
5. Open a new terminal in **webapp/frontend** path and run:
   > npm install

   > npm start
6. (Optionally) If you choose a **PORT** number different to 4001 in 3rd step, you must change the **proxy** field in the **package.json** located in **webapp/frontend** path. 
7. (Optionally) If you will be an *admin* user, you should change the **role** field of the user in **Users collection** after the signup into application.

## References
Dataset sources:
+ [Cat and Dogs Breeds](https://www.kaggle.com/datasets/hocop1/cat-and-dog-breeds-parameters)
+ [Dog Breeds ranked](https://www.kaggle.com/datasets/jainaru/dog-breeds-ranking-best-to-worst)
+ [Cat Breeds details](https://www.kaggle.com/datasets/warcoder/cat-breeds-details)

## License
This project is distributed under the [GNU General Public License v3](LICENSE).

![GPLv3Logo](https://www.gnu.org/graphics/gplv3-127x51.png)
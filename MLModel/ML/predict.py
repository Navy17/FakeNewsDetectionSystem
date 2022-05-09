import nltk
import re
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
ps = WordNetLemmatizer()
stopwords = stopwords.words('english')
nltk.download('wordnet')


def cleaning_data(row):
    
    # convert text to into lower case
    row = row.lower() 
    
    # this line of code only take words from text and remove number and special character using RegX
    row = re.sub('[^a-zA-Z]' , ' ' , row)
    
    # split the data and make token.
    token = row.split() 
    
    # lemmatize the word and remove stop words like a, an , the , is ,are ...
    news = [ps.lemmatize(word) for word in token if not word in stopwords]  
    
    # finaly join all the token with space
    cleanned_news = ' '.join(news) 
    
    # return cleanned data
    return cleanned_news 

import pickle
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

import joblib 

clf = joblib.load('model.pkl')
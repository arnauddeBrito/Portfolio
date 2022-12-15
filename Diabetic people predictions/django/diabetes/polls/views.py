from django.http import HttpResponse
from django.template import loader
import plotly.express as px
import pandas as pd
import numpy as np

def index(request):
    template=loader.get_template('template0.html')
    df= pd.read_csv('diabetic_data.csv', delimiter=',')
    nRow, nCol = df.shape
    
    head=df.head().to_html()
    
    df.drop(['glimepiride-pioglitazone','metformin-pioglitazone','patient_nbr','encounter_id','acetohexamide','troglitazone','examide','citoglipton'],axis=1,inplace=True)
    df.replace('?',np.nan,inplace=True)
    df.drop(['payer_code','medical_specialty','weight'],axis=1,inplace=True)
    df.dropna(inplace=True)
    df['race'].isna().sum()
    df=df[df.gender!='Unknown/Invalid']
    df.readmitted = [1 if each=='<30' else 0 for each in df.readmitted]
    cleaned=df.head().to_html()
    
    corr_matrix = df.corr()
    heatmap = px.imshow(corr_matrix)
    heatmap_html=heatmap.to_html(full_html=False,default_height=500,default_width=700)
    
    number_medication=pd.DataFrame(df["num_medications"]).groupby("num_medications")["num_medications"].count()
    lign = px.line(number_medication)
    lign_html=lign.to_html(full_html=False,default_height=500,default_width=700)
    
    medication_vs_time=pd.DataFrame(df["num_medications"])
    medication_vs_time.insert(1,"time_in_hospital",df["time_in_hospital"])
    medication_vs_time=medication_vs_time.groupby("num_medications").mean()
    bar = px.bar(medication_vs_time,y="time_in_hospital")
    bar_html=bar.to_html(full_html=False,default_height=500,default_width=700)
    
    context={'leprint':f'The dataframe contains {nRow} rows and {nCol} columns',
    'head':head,
    'cleaned':cleaned,
    'heatmap_html':heatmap_html,
    'lign_html':lign_html,
    'bar_html':bar_html,
    }
    
    return HttpResponse(template.render(context,request))
    
    
    

def Table(request):
    df= pd.read_csv('diabetic_data.csv', delimiter=',')
    geeks_object = df.head().to_html()

    return HttpResponse(geeks_object)
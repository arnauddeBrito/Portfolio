# Python-Diabete


Readmission of the Diabetics patients!
https://archive.ics.uci.edu/ml/datasets/Diabetes+130-US+hospitals+for+years+1999-2008

Membres : Nicolas FERRARA, Arnaud DE BRITO, Constance LE FOURN


Steps :
 - Cleaning / Preprocessing
 - Scikit Learn
 - Visualization
 - Django
 - Power Point

Applied models (on the 05/12/2022):
 - Logistic regression : 0.584747
 - Linear discriminant analysis :0.585365
 - K Neighbors Classifier :0.0.800545
 - Decision tree classifier : 0.893246
 - Gaussian NB:0.502700
 - RandomForestClassifier : 0.951659
 - XGBoost:0.950623
 - ADA boost classifier:0.882629
 - MLP Classifier:0.500882

Conclusion :

XGBoost and Random forest are the best models.
Grid Search is not a perfect fit, XGBoost might be a better one with an accuracy of 0.949 and a precision of 0.999, instead of an accuracy of 0.946 and a precision of 0.996 for the Random Forest.
You can see the conclusion table at the end of the Final_project.ipynb.
XGBoost allows us to predict the readmission of a patient depending on the drugs, age and admission with an accuracy of 94,9%.
# Controller

This folder is only the organisation part for the chart. The controller only builds the bridge between each datahook (Model) and the view. 

This means:
- the controller calls the data hook.
- After that the controller uses the use Context hook to get the data
- the extracted data from the use Context hook is beeing send to the view where the Bar chart is beeing generated
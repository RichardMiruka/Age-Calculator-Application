function calcy() {
    let date_1 = document.querySelector('#b-date').value;
    let date_2 = document.querySelector('#c-date').value;

   if(!date_2){
    date_2 = new Date().toJSON().slice(0, 10);
   }
    
   let dateofbirth = new Date(date_1);
   let currentdate = new Date(date_2);

   let diff = new Date(currentdate.getTime() - dateofbirth.getTime())
   
   let output = document.getElementById('showdata')
   output.id = "showdata";

   if(diff == NaN || !date_1){
    output.innerHTML = "Please select date first!"
    return;
   }

   if(date_1 > date_2){
    output.innerHTML = "Invalid Input!"
    return;
   }

   output.innerHTML = "Age: " + " " + Number(diff.getUTCFullYear() - 1970) + " Years " + " " + diff.getUTCMonth() + " Months " + " " + Number(diff.getUTCDate() - 1) + " Days";


}
console.log("get weather function invoked");
async function getWeather(){
    console.log("get weather function invoked2");
    var city=document.getElementById("city").value;
    var url="https://api.openweathermap.org/data/2.5/forecast?q=";
    var key="9df1e955730fee40a51d36e5760b61db";
    url=url.concat(city).concat('&appid=').concat(key).concat('&units=metric');
    console.log(url)
    let result=await fetch(url);
    let ob=await result.json();
    var a=document.getElementById("display");
    label=[];
    data=[];
    var time=ob.list[0].dt_txt.split(" ")[1];
     a.innerHTML='<p id="country">'+"COUNTRY NAME: "+'</p><br>'+'<p id="max_temp">'+"MAXIMUM TEMPERATURE IS : "+ob.list[0].main.temp_max+'</p><br>'+
    '<p id="min_temp">'+"MINIMUM TEMPERATURE IS : "+ob.list[0].main.temp_min+'</p><br>'+
    '<p id="humidity">'+"HUMIDITY : "+ob.list[0].main.humidity+'</p><br>';
    for(i=0;i<40; i+=8){
        var date=ob.list[i].dt_txt.split(" ");
        label.push(date[0]);
        data.push(ob.list[i].main.temp);
       
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: label,
            data: data,
            backgroundColor: [
                'rgba(255,1,0,0.8)',
                'rgba(1,1,255,0.8)',
                'rgba(255,205,1,0.8)',
                'rgba(1,255,1,0.8)',
                'rgba(155,100,255,0.8)',
                'rgba(255,140,45,0.8)'
            ],
            borderColor: [
                'rgba(255,1,1,0.8)',
                'rgba(1,1,255,0.8)',
                'rgba(255,205,1,0.8)',
                'rgba(1,255,1,0.8)',
                'rgba(155,100,255,0.8)',
                'rgba(255,140,45,0.8)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

v=window.localStorage.getItem("mydata")
document.getElementById('mydata').innerHTML=v;

const xhr = new XMLHttpRequest();

 document.getElementById('search-btn').addEventListener('click',() =>{
    const text = document.getElementById('search-text').value
    xhr.open('GET', `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${text}`);
xhr.setRequestHeader('X-RapidAPI-Key', 'b4066d0cd4msh18832150e056665p16383ejsn170860891360');
xhr.setRequestHeader('X-RapidAPI-Host', 'tasty.p.rapidapi.com');

xhr.addEventListener('readystatechange',  () => {
	if (xhr.readyState ==4 && xhr.status ==200) {
		console.log(this.responseText);
        const response = JSON.parse(xhr.responseText)
        console.log(response);
        let output = ' '
			for(let i=0; i < response.results.length; i++) {
				output += `
				<div class="container" style="width:25%; margin:20px; border:2px solid black; border-radius: 30px;background-color: rgb(244, 119, 119,0.5);
				rgb(185, 250, 253,0.5);">  
				<div class="box">     
				 <img style="width:100%; height:100%; margin-right:5px; border-radius:30px;" src="${response.results[i].thumbnail_url}" />
								<h4 style="font-family: fangsong;">${response.results[i].name}</h4>                    
							<div class="visible">
							<h6>>${response.results[i].keywords}</h6>
                                <p>${response.results[i].description}<p>	
							</div>
							<div class="hide-content">
								<button>watch video<video style="width:100%; height:100%;"   src="${response.results[i].original_video_url}" controls ></video></button>							
								<h6>>${response.results[i].keywords}</h6>
                                <p>${response.results[i].description}<p>						
							</div>
	   					<button id="jbtn" style="background-color:teal;color:white;padding:10px 15px;margin:15px;border-radius:5px;float:right;"> Watch Video</button>
						</div>


				</div>						
				`}
				$(document).ready(function(){
					$(".hide-content").hide();
					$(document).on('click',"#jbtn",function(){
						var moreLessbutton= $(".hide-content").is(":visible")?'Watch Video':'Hide Video';
						$(this).text(moreLessbutton);
						$(this).parent(".box").find(".hide-content").toggle();
						$(this).parent(".box").find(".visible").toggle();
					});
				});
				document.getElementById('my-div').innerHTML = output
		}	
})
xhr.send()

 })

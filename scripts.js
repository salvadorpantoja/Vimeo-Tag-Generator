//FORM STUFF?//
  var form = document.getElementById('form')

  form.addEventListener('submit',function(event) {
    event.preventDefault() /// prevents the form from autosubmitting




    //JS CODE FOR ATTORNEY NAMES//
    let attorneys = document.getElementById('attorneys').value
  
    let AttorneyArr = attorneys.split(",");
    
    AttorneysArrFinal = [];

    
    for (let i = 0; i <= AttorneyArr.length - 1; i++) {
      // Check if the trimmed element is not empty
      if (AttorneyArr[i].trim().length !== 0) {
          AttorneysArrFinal.push("ATTY: " + AttorneyArr[i].trim()); // Add trimmed value
      }
  }

   

    //JS CODE FOR CAMPAIGN NAME//
    let campaign = document.getElementById('campaign').value
    
    if (campaign.length != 0) {
        campaign = "CAMP: " + campaign;
    }
    

    
     //JS CODE FOR MARKETING NUMBER//
     let marketingNum = document.getElementById('marketing-num').value
    
     if (marketingNum.length != 0) {
      marketingNum = "MCN: " + marketingNum;
     }
     



    //JS CODE FOR CAPABILITITES//
    let capabilities = "";

    if (document.getElementById('corporate').checked) {
      capabilities += document.getElementById('corporate').value;
    }
    
    if (document.getElementById('employment').checked) {
      capabilities += document.getElementById('employment').value;
    }
    
    if (document.getElementById('finance').checked) {
        capabilities += document.getElementById('finance').value;
      }

      if (document.getElementById('ip-and-tech').checked) {
        capabilities += document.getElementById('ip-and-tech').value;
      }

      if (document.getElementById('investment-funds').checked) {
        capabilities += document.getElementById('investment-funds').value;
      }

      if (document.getElementById('litigation').checked) {
        capabilities += document.getElementById('litigation').value;
      }

      if (document.getElementById('private-equity').checked) {
        capabilities += document.getElementById('private-equity').value;
      }

      if (document.getElementById('real-estate').checked) {
        capabilities += document.getElementById('real-estate').value;
      }

      if (document.getElementById('regulatory-gov-affairs').checked) {
        capabilities += document.getElementById('regulatory-gov-affairs').value;
      }

      if (document.getElementById('tax').checked) {
        capabilities += document.getElementById('tax').value;
      }

      if (document.getElementById('goods-food-retail').checked) {
        capabilities += document.getElementById('goods-food-retail').value;
      }

      if (document.getElementById('energy-nat-resources').checked) {
        capabilities += document.getElementById('energy-nat-resources').value;
      }

      if (document.getElementById('fin-services').checked) {
        capabilities += document.getElementById('fin-services').value;
      }

      if (document.getElementById('healthcare').checked) {
        capabilities += document.getElementById('healthcare').value;
      }

      if (document.getElementById('industrials').checked) {
        capabilities += document.getElementById('industrials').value;
      }

      if (document.getElementById('insurance').checked) {
        capabilities += document.getElementById('insurance').value;
      }

      if (document.getElementById('invest-funds').checked) {
        capabilities += document.getElementById('invest-funds').value;
      }

      if (document.getElementById('life-sciences').checked) {
        capabilities += document.getElementById('life-sciences').value;
      }

      if (document.getElementById('media-sprts-ent').checked) {
        capabilities += document.getElementById('media-sprts-ent').value;
      }

      if (document.getElementById('merge-aqui').checked) {
        capabilities += document.getElementById('merge-aqui').value;
      }
      
      if (document.getElementById('restructuring').checked) {
        capabilities += document.getElementById('restructuring').value;
      }
      
      if (document.getElementById('technology').checked) {
        capabilities += document.getElementById('technology').value;
      }
      
    let capabilitiesArrayPre = capabilities.split(",");
   
    let capabilitiesArray = capabilitiesArrayPre.filter(elm => elm);

    let capabilitiesFinal = [];

    for(let i = 0; i <= capabilitiesArray.length-1; i++){
      capabilitiesFinal.push("CAP:" + capabilitiesArray[i]);   
      }
      
     


    //JS CODE FOR VIDEO TYPE//
    
    let videoType = document.getElementById("dropdown-1");
    let videoTypeSelected = videoType.options[videoType.selectedIndex].text;
    
    if (videoTypeSelected.length != 0) {
      videoTypeSelected = "VID: " + videoTypeSelected;
    }




    //JS CODE FOR VIDEO TEAM//
    
    let videoTeam = "";

    if (document.getElementById('us-video-team').checked) {
        videoTeam += document.getElementById('us-video-team').value;
    }
    
    if (document.getElementById('international').checked) {
        videoTeam += document.getElementById('international').value;
    }
    
    if (document.getElementById('vendor').checked) {
        videoTeam += document.getElementById('vendor').value;
      }

    let videoTeamArrPre = videoTeam.split(",");
   
    let videoTeamArr = videoTeamArrPre.filter(elm => elm);

    let videoTeamArrFinal = [];

    for(let i = 0; i <= videoTeamArr.length-1; i++){
        videoTeamArrFinal.push("TEAM:" + videoTeamArr[i]);   
      }
      
    


    //JS CODE FOR DISTRIBUTION//

    let distribution = document.getElementById("dropdow-2");
    let distributionSelected= distribution.options[distribution.selectedIndex].text;
    
    if (distributionSelected.length != 0) {
      distributionSelected = "DIST: " + distributionSelected;
    }

    //let distribitionArrayFinal = distributionSelected.split(",");


    //MERGED ARRAYS//

    let mergedArray = [];

    mergedArray.push(AttorneysArrFinal,campaign,marketingNum,capabilitiesFinal,videoTypeSelected,videoTeamArrFinal,distributionSelected);

    //let  mergedArrayFinal =  mergedArray.filter(elm => elm);    
    
    let mergedArrayFinal = [];

    for(let i = 0; i <= mergedArray.length-1; i++){
        if(mergedArray[i].length > 0){
            mergedArrayFinal.push(mergedArray[i]);   
      }
    }

    mergedArrayFinal = mergedArrayFinal.filter(item => item !== ","); 

    

    //JS CODE OUTPUT//
    document.getElementById("result").innerHTML = (mergedArrayFinal);

  })




<!-- SOURCE FOR JS: https://www.youtube.com/watch?v=S944-epyYuI -->
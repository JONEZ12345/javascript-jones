document.addEventListener('DOMContentLoaded', function(){
    
    const Jones = {
        surname : "Jimmy",
        age : 10,
        address : {
            street : "Alasepe 1520",
            kink : {
                mood : calm
            }
        }
    }
     document.getElementById('contain').textContent = Jones.surname
     document.getElementById('handleSubmit').innerHTML =Jones.address.street
     document.getElementById('container').innerText = Jones['address']["street"]
     document.getElementById('personal').innerText = Jones["address"]["kink"]["mood"]
    
})
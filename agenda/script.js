class Contact{
    
    constructor(name, phoneNumber){
        
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    
    
}

var indexIntent;

var contacts = [];

var contact1 = new Contact("Gigi","0799988876");
var contact2 = new Contact("Ionel","0727879909");
var contact3 = new Contact("Maria","0745078891");

contacts.push(contact1);
contacts.push(contact2);
contacts.push(contact3);

function formSubmitted(event){
    
    event.preventDefault();
    
     var newContact = new Contact(
					document.querySelector("[name='fname']").value, 
					document.querySelector("[name='fnumber']").value 
				)
				if(indexIntent===undefined){
					
					contacts.push(newContact);
                    document.querySelector("[name='fname']").value=""; 
					document.querySelector("[name='fnumber']").value=""; 
				}else{
					
                    document.querySelector("[name='fname']").value=""; 
					document.querySelector("[name='fnumber']").value=""; 
					contacts[indexIntent]=newContact;
				}
				
				draw();
    
}

    function modify(idx){
        
        document.querySelector("[name='fname']").value = contacts[idx].name; 
        document.querySelector("[name='fnumber']").value = contacts[idx].phoneNumber;
        window.indexIntent = idx;
            
       
    }
    
    function deleteContact(idx){
        
                    
        			if(confirm(`Esti sigur ca vrei sa stergi ${contacts[idx].name} ?`)){
					contacts.splice(idx,1);
                        
                        console.log("Value of id "+idx);
					draw();
                        
                        for(var i =0; i<contacts.length; i++){
                            
                            console.log(contacts[i].name+" still in array");
                        }
				}
        
    }

function draw(){
    
    console.log("draw function called");
    
    var str = "";
    
    
    if(contacts.length>=1){
    for(var i = 0; i<contacts.length;i++){
        
        str+= `   
        <div class="contact">
        <div class="info">    
        <p>${contacts[i].name}</p>
        <p>${contacts[i].phoneNumber}</p> 
        </div> 
        <div class="buttons">    
        <button class="fbutton" onclick="modify(${i});">Modifica</button>
        <button class="fbutton" onclick="deleteContact(${i});">Sterge</button>
        </div>    
        </div>
        <br>
        <br>
         
        `
        
        document.querySelector(".contact-holder").innerHTML = str;
        
    }
    }else{
        
        document.querySelector(".contact-holder").innerHTML = str;
    }


    
}

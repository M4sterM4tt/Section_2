
$(document).on("pagecreate","#pageone", onPageCreated);
$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});  


fruit = [
  { name: 'Banana', colour: 'Yellow', cost: '£0.18', origin: 'Mande'    },
  { name: 'Orange', colour: 'Orange', cost: '£0.30', origin: 'Persian' 	},
  { name: 'Lime',	colour: 'Green', cost: '£0.32', origin: 'Persian'	}
];


function onPageCreated() {
    
	var ractive = new Ractive({

        el: '#content', // The `el` option can be a node, an ID, or a CSS selector.
	
        template: '#template', // We could pass in a string, but for the sake of convenience we're passing the ID of the <script> tag above.
	
        data: { fruitlist: fruit } // Here, we're passing in some initial data
        
    });
    
    var ractive2 = new Ractive({

        el: '#content2', // The `el` option can be a node, an ID, or a CSS selector.
	
        template: '#template2', // We could pass in a string, but for the sake of convenience we're passing the ID of the <script> tag above.
	
        data: { fruitlist: fruit } // Here, we're passing in some initial data
        
    });
}
          


//function submitText() {
//    
//	var text = $('#textinput').val();
//    for(loop = 0; loop < 3; loop+=1) {
//	   if (text == fruit[loop]) {
//            var ractive = new Ractive({
//               
//                el: '#content', // The `el` option can be a node, an ID, or a CSS selector.
//            
//                template: '#template', // We could pass in a string, but for the sake of convenience we're passing the ID of the <script> tag above.
//	
//                data: { fruitlist: fruit } // Here, we're passing in some initial data
//        
//        });
//    }
//        
//}
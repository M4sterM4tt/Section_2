
$(document).on("pagecreate","#pageone", onPageCreated);

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
}

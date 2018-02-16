({
	getResponse : function(component) {
		var action = component.get("c.getCalloutResponseContents");
        action.setParams({
            "url": 'https://api.giphy.com/v1/gifs/search?api_key=8UVi7mK7UwPOAsp73jK7p0EtNZ0DNaOu&q=funny&limit=5&offset=0&rating=G&lang=en'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            alert(state);
            if (component.isValid() && state === "SUCCESS") {
                console.log('res---->' + response.getReturnValue());
                var x = JSON.parse(response.getReturnValue()) 
                component.set("v.response", x);
            }
        });
        $A.enqueueAction(action);
	}
})
({
	myAction : function(component, event, helper) {
	},
	doinit:function(component,event,helper){
	//	debugger;
		var action=component.get('c.getFieldsFromFieldSet');
		action.setParams({
			'fieldSet':component.get('v.fieldSet'),
			'objectApi':component.get('v.objectApi')
		});
		action.setCallback(this,function(response){
			if(response.getState()=='SUCCESS'){
				var fieldsSchema=Object.values(JSON.parse(response.getReturnValue()));
				console.log('@@@'+fieldsSchema);
				component.set('v.fieldsetfieldPaths',fieldsSchema);
				console.log(component.get('v.fieldsetfieldPaths'));
				/*var fieldsetfieldPaths=[];
					for(var i=0;i<fieldsSchema.length;i++){
						fieldsetfieldPaths.push(fieldsSchema[i]);
				}
				debugger;
				console.log(fieldsetfieldPaths);

			component.set('v.fieldsetfieldPaths',fieldsetfieldPaths);
			console.log(component.get('v.fieldsetfieldPaths'));*/
			}else{
				console.log('Failed in ShowFormEditableComponent'+response);
			}
		});
		$A.enqueueAction(action);
	}
})
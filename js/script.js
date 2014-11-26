
//main html element or main node 
var mainNode=document.getElementsByTagName("body");

var object=[];
object=htmlToJson(mainNode[0],object);
console.log(object);


//function to convert html structure to dom object. first parameter is root node and second is dom object
function htmlToJson(mainNode,object){
		
		var children = mainNode.childNodes;
		var attributes=mainNode.attributes;
		var childrenIndex=0;
		object["tag"]=mainNode.tagName;
		
		
		// this block store all attributes and value
		if(attributes!= undefined){
				for(var i=0;i<attributes.length;i++){
						
						object[attributes[i].nodeName]=attributes[i].nodeValue;
					}
			
			}
		
		//this block call function recursively for every child
		if(children.length>0){
				object['children']=[];
				
				for(var i=0;i<children.length;i++){
						
						if (children[i].tagName!=undefined && children[i].tagName!='SCRIPT' && children[i].tagName!='LINK' ) {
			                 	 object["children"].push({});
						  		 htmlToJson(children[i],object['children'][childrenIndex]);
						  		 childrenIndex++;
						}
					}
			
			}
			
		
		return object;
	
	}
	

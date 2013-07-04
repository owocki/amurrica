walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

        v = v.replace(/\bamerican\b/g, "amurrican");
        v = v.replace(/\bAmerican\b/g, "Amurrican");
        v = v.replace(/\bUSA\b/g, "Amurrica!");
        v = v.replace(/\bU.S.A.\b/g, "Amurrica!");
        v = v.replace(/\bU.S.\b/g, "Amurrica!");
        v = v.replace(/\bamerica\b/g, "amurrica!");
        v = v.replace(/\bAmerica\b/g, "Amurrica!");
	
	textNode.nodeValue = v;
}



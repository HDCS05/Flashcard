
// ClozeCard constructor text and cloze full 
var ClozeCard = function(text, cloze) {

	// Making it scope-safe constructor
	if (!(this instanceof ClozeCard)) { 
    	return new ClozeCard(text, cloze);
  	}

	// Convert to lower case
	var textl = text.toLowerCase();
	var clozel = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textl.includes(clozel)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');

}

module.exports = ClozeCard;


// BasicCard constructor front and back
var BasicCard = function(front, back) {

	// Making it scope-safe constructor
	if (!(this instanceof BasicCard)) { 
    	return new BasicCard(front, back);
  	}

	this.front = front;
	this.back = back;
	
}

module.exports = BasicCard;

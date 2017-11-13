# Seneca Test 

This is an application built to supplement my application to Seneca Learning. It is built roughly following atomic principles with the components organised as atoms -> molecules -> organisms (increasing complexity).

A live version can be viewed at: [http://henrymunro.com/HireMe/Seneca/](http://henrymunro.com/HireMe/Seneca/)

The question and the options could be dynamically supplied for the component to render. Currently this configuration is statically set in [app/views/js/Home.container.js](https://github.com/henrymunro/Seneca-Application/blob/master/app/views/js/Home.container.js) and passed to the Toggles component. Questions are in the following format:  

```javascript
{
	question: 'Ideal conditions for bacterial growth',
	options: [{
	  		option_0: 'Cold',
			option_1: 'Warm',
			correctOption: 1
	  	},{
	  		option_0: 'No water',
			option_1: 'Water',
			correctOption: 1
	  	},{
	  		option_0: 'No food',
			option_1: 'Food',
			correctOption: 1
	  	}]
}
```

On page load a series of random (non-correct) answers is generated. The answers are then marked using the method in [app/views/js/Toggles/methods.js](https://github.com/henrymunro/Seneca-Application/blob/master/app/views/js/Toggles/methods.js) and a mark object is stored in the Toggles reducer along side the question and answers.

## To Run
Clone the repo, install packages then run: 

npm run webpack

npm run server

# Seneca Test 

This is an application built to supplement my application to Seneca Learning. It is built roughly following atomic principles with the components organised as atoms -> molecules -> organisms -> ecosystems (increasing complexity).

The question and the options could be dynamically supplied for the component to render. Currently this configuration is statically set in app/views/js/organisms/QuestionArea/reducer, in the following format:  

```javascript
{
	question: 'Ideal conditions for bacterial growth',
	options: [{
	  		option_0: 'Cold',
			option_1: 'Warm',
			currentOption: 0,
			correctOption: 1
	  	},{
	  		option_0: 'No water',
			option_1: 'Water',
			currentOption: 0,
			correctOption: 1
	  	},{
	  		option_0: 'No food',
			option_1: 'Food',
			currentOption: 1,
			correctOption: 1
	  	}]
}
```

A live version can be viewed at: [http://henrymunro.com/HireMe/Seneca/](http://henrymunro.com/HireMe/Seneca/)
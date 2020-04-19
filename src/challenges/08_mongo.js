
/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;


/***********************************
* Export Challenge Array
*********************************** */

export default {
	title: "Week 8.1 Quiz",
	category: "Basic Mongo DB Syntax",
	challenges: [
		{
			title: `Connect to CoderSchool's Test Database`,
			subtitle: `mongo "mongodb+srv://student:coderschool@cluster0-frbsv.mongodb.net/restaurants"`,
			choices: [
				"Ok",
				"What",
				"I'm a banana",
			],
			solution: `2`,
			explanation: `
        This isn't really a question; this is to get you set up. <a href='https://www.youtube.com/watch?v=LH5ay10RTGY' target="_blank"> LOOK AT ME MOVE. BANANA POWER!</a>`
		},
		{
			title: `How many restaurants are in our database?`,
			subtitle: `use db.rest.count();`,
			choices: [
				"0",
				"10",
				"3772",
				"14243",
				"I don't know",
			],
			solution: `2`,
			explanation: `
			Issuing <code>db.rest.count()</code> counts all documents in our collection. <a href='https://docs.mongodb.com/manual/reference/method/db.collection.count/'> Here is the documentation page for count.</a>
		`
		},
		{
			title: `What's the name of the restaurant with <code>_id: 5e247e8124e6e10bfb597aac</code>`,
			subtitle: `use db.rest.find`,
			choices: [
				"Pho King",
				"Wild Asia",
				"McDonald's",
				"Bennigan's",
				"Shalimar",
			],
			solution: `1`,
			explanation: `
				ObjectId is a special type. When searching by id, you need to do: <code>db.rest.find({_id: ObjectId("5e247e8124e6e10bfb597aac")})
			`
		},
		{
			title: `What street is the restaurant named May May Kitchen on?`,
			subtitle: `use db.rest.find`,
			choices: [
				"Sutter Street",
				"Morris Street",
				"Nguyen Thi Minh Khai",
				"Broadway Street",
				"Post Street",
			],
			solution: `0`,
			explanation: `
			<code>db.rest.find({name: 'May May Kitchen'}, {'address.street': 1});</code>
		`
		},		
		{
			title: `What's the command to find all the restaurants on Broadway Street?`,
			subtitle: `use db.rest.find`,
			choices: [
				'db.rest.find({"address.street": "Broadway"})',
				'db.rest.find({"street": "Broadway"})',
				'db.rest.find({"address": {"street": "Broadway"}})',
				'db.rest.find({"street": {$in: "Broadway"}})',
				"I am a banana"
			],
			solution: `0`,
			explanation: `
			You just gotta read the docs, sure what else to say! <a href="https://docs.mongodb.com/manual/tutorial/query-embedded-documents/#specify-equality-match-on-a-nested-field" target="_blank"> Equality Match on a nested field </a>
		`
		},	
		{
			title: `How many restaurants of type Bakery are in the Bronx borough?`,
			subtitle: `use your $and operator`,
			choices: [
				
			],
			solution: `0`,
			explanation: `
			Here's the query that you need. <code>db.rest.find({'grades.grade': 'B'}, {name: 1, grades: 1}).count();</code>. This queries for all restaurant documents that have a sub-document, that is an array called grades, that contains an element that matches  grade: A. Whew, that's a mouthful!
			`
		},		
		{
			title: `How many restaurants have received a "C" grade?`,
			subtitle: `<a href="https://docs.mongodb.com/manual/tutorial/query-array-of-documents/" target="_blank"> Relevant Docs Here </a>`,
			choices: [
				"20",
				"3772",
				"496",
				"1",
				"0",
			],
			solution: `0`,
			explanation: `
			As mentioned above, you should use the $and operator. The correct query is: <code>db.rest.find({$and: [{"borough": "Bronx"}, {cuisine: "Bakery"}]}).count()</code>. <a href="https://docs.mongodb.com/manual/tutorial/query-documents/#specify-and-conditions" target="_blank"> Here's the documention on $and.</a>
			`
		},
		
	]
};

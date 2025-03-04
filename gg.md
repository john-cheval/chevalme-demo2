<!-- @format -->

HomePage Projects get https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homeprojects

Blogs get https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts

Next Project get https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?ID=179

Previous Project get https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?ID=179

Contact Form Submission post https://d331b20430.nxcli.net/chevalapi/wp-json/contact-form-7/v1/contact-forms/5/feedback "var request = require('request');

var options = {
'method': 'POST',
'url': 'https://d331b20430.nxcli.net/chevalapi/wp-json/contact-form-7/v1/contact-forms/5/feedback',
'headers': {
},
formData: {
'text-name': 'test',
'text-phone': '0565935770',
'email-address': 'jassi@jj.com',
'text-company': 'test c',
'textarea-msg': 'dh fjg kj g',
'\_wpcf7_unit_tag': '2fcfb42'
}
};
request(options, function (error, response) {
if (error) throw new Error(error);
console.log(response.body);
});
"

Projects get https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/projects

projects by category get https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?catid=15

Projects details get https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?ID=179

Blog details get https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts/1070

Google review https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews

/*  Canvas  LMS Help Ticket Updates
// Created by Jason Diehl for Oaks Christian School
// https://github.com/professordiehl/canvas_help_ticket.git
*/
$(document).ready(function(){
  var sp = $('#login_form label[for=pseudonym_session_unique_id]>span');
  sp.text('Username');
});

function fixForm(){

  var $form = $('#create_ticket');
 //H4 Heading Label
  $form.find('h4')
  .css("font-size", "14px")
  .css("font-weight", "bold")
  .text('Ticketing is open 24 hours a day, 7 days a week.')
  //Alert Text
  $form.find('div[class="alert"]')
  .css("font-size", "13px")
  .css("padding", "1px")
   	.text('Support staff hours are Monday-Friday, 8:00am-5:00pm PST, except for Holiday closings and extended hours during the start and end of semesters.')
	.append('<br><p>After submitting the ticket, please check the email listed for Oaks Christian School for your response. You can check on the status of your ticket at the <a href="https://help.instructure.com/tickets" target="_blank" style="font-weight:bold;">Help Center</a></p>')
	
   /* Label Text for Subject */
  $form.find('label[for="error_subject"]')
  .css("top-margin", "1px")
  .css("font-size", "14px")
  .css("font-weight", "bold")
       .text('Course Name, Module, and Assignment Affected')
       .append('<small style="color:red;">*required</small>')
  /*Label Text for Comments */
  $form.find('input')	
   .css({
	 height : '20px',
   })
  $form.find('label[for="error-comments"]')
  .css("font-size", "14px")
  .css("font-weight", "bold")
       .text('Please provide a detailed description of your issue.')
	   .append('<small style="color:red;">*required.</small>')
   $form.find('textarea')
   .css({
	 height : '82px',  
   })
  /* Label Text for Severity */
   $form.find('label[for="severity"]')
  .css("font-size", "14px")
  .css("font-weight", "bold")
  .text('How is this affecting you?')
 }
/* Help Ticket Event Listener */
$(document).on('click', '#help-dialog-options a[href="#create_ticket"]', function() { setTimeout(fixForm, 1); })
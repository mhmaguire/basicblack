class ContactMailer < ActionMailer::Base
  default from: "basicblackkcg@gmail.com"

  def contact_email(email)
  	@email = email
  	mail(to: 'mhmaguire0@gmail.com', subject: 'New contact from basic black king chair guy')
  end
end

class ContactsController < ApplicationController
  def create
  	contact = params[:contact]
  	respond_to do |format|
  		if ContactMailer.contact_email(contact).deliver
  			format.js
  		else 
  			format.js {render :errors }
  		end
  	end
  end
end

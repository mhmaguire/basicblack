module StaticPagesHelper
  def static?
    return controller_name=='pages'
  end
end
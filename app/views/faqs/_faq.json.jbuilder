json.extract! faq, :id, :questions, :answers, :created_at, :updated_at
json.url faq_url(faq, format: :json)
FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {Rails.root.join('spec/fixtures/images.jpg').open}
    user
    group
  end
end
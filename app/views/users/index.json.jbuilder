json.array! @users do |user|
  json.id user.user_id
  json.name  user.user.name
end
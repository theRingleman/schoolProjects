words = []

puts "Give me some words and I will sort them!"

while true
  word = gets.chomp
  if word == ""
    break
  end
  words.push word
end

puts "Great now I will sort them!"
puts words.sort

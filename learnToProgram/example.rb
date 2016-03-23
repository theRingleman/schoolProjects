puts 'Hello there and what\'s your name?'
name = gets.chomp
puts 'Your name is ' + name + '? What a lovely name!'
puts 'Pleased to meet you ' + name + '. :)'

name.reverse!
puts name
name.reverse!
puts name

lineWidth = 50
puts("This is a centered line".center(lineWidth))

input = ''

while input != 'bye'
  puts input
  input = gets.chomp
end

puts "Come again soon!"

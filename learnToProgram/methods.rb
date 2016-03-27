def sayMoo numberOfMoos
  puts "Mooooooo..." * numberOfMoos
end

def double num
  doubledNum = num * 2
  puts "#{num} doubled is #{doubledNum}"
end

returnVal = puts "This puts returned: "
puts returnVal

def favoriteFood name
  if name == "Sam"
    return "Hot Pockets"
  end
  if name == "Gwen"
    return "Pizza"
  end
  "hard to say...maybe fried plantain"
end

puts favoriteFood "Sam"
puts favoriteFood "Gwen"
puts favoriteFood "Charli"



def leapYear(year)
  if year % 4 == 0
    if year % 400 == 0
      return true
    elsif year % 100 == 0
      return false
    end
    return true
  else
    return false
  end
end

puts "Please enter a starting year."
startingYear = gets.chomp
startingYearInt = startingYear.to_i
puts "Please enter an ending year."
endingYear = gets.chomp
endingYearInt = endingYear.to_i

while startingYearInt <= endingYearInt
  if leapYear(startingYearInt)
    puts startingYearInt
    startingYearInt += 1
  else
    startingYearInt += 1
  end
end

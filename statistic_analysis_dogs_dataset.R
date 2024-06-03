library(utils)

data <- read.csv("cleaned_datasets/dog_breeds.csv")
View(data)

# Affectionate with Family Frequencies
family_friendly <- data[, "Affectionate.with.Family"]
family_friendly

intervals <- c(1, 2, 3, 4, 5)
abs_frequence <- table(cut(family_friendly, breaks = intervals))
abs_frequence

hist(family_fiendly, breaks = intervals, freq = TRUE,
     ylim = c(0, max(abs_frequence) + 1), col = c("red", "blue", "green", "orange"),
     border = "black", main = "Affectionate With Family Attribute Frequencies",
     xlab = "Family Friendly Values", ylab = "Absolute Frequency")

mean_family_friendly <- mean(family_fiendly)
mean_family_friendly

# Boxplot food costs per year
food_costs_per_year <- data[, "X.Food.Costs.Per.Year"]
food_costs_per_year

quantile(food_costs_per_year, na.rm = TRUE)
summary(food_costs_per_year)

boxplot(
  food_costs_per_year,
  main = "Boxplot Food Costs Per Year",
  ylab = "Values",
  col = "lightblue",
  border = "black"
)

stats <- boxplot.stats(food_costs_per_year)
stats

high_limit <- stats$stats[5]
high_limit

# verificare le razze che hanno un valore > 674 in Food Costs Per Year
food_costs_per_year_breed <- data[, c("Breed", "X.Food.Costs.Per.Year")]
View(food_costs_per_year_breed)

df <- data.frame(
  breed = data[, "Breed"],
  food_costs = data[, "X.Food.Costs.Per.Year"]
)

breeds_with_highest_food_cost <- c()
for (i in 1:nrow(df)){
  breed <- df$breed[i]
  food_cost <- df$food_costs[i]
  if (is.na(food_cost))
    next
  else if (food_cost > high_limit)
    breeds_with_highest_food_cost <- c(breeds_with_highest_food_cost, breed)
}

print(breeds_with_highest_food_cost)

# longevity per year
longevity_per_year <- data[, "Longevity..years."]
longevity_per_year_mean <- mean(longevity_per_year, na.rm = TRUE)
longevity_per_year_mean

# playfullnes
playfullness <- data[, "Potential.For.Playfulness"]
playfullness

intervals <- c(1, 2, 3, 4, 5)
abs_frequence <- table(cut(playfullness, breaks = intervals))
abs_frequence

hist(playfullness, breaks = intervals, freq = TRUE,
     ylim = c(0, max(abs_frequence) + 8), col = c("red", "blue", "green", "orange"),
     border = "black", main = "Potential For Playfulness Attribute Frequencies",
     xlab = "Potential For Playfulness Values", ylab = "Absolute Frequency")

playfullness_mean <- mean(playfullness, na.rm = TRUE)
playfullness_mean

# kid friendly
kid_friendly <- data[, "Incredibly.Kid.Friendly.Dogs"]
kid_friendly

intervals <- c(1, 2, 3, 4, 5)
abs_frequence <- table(cut(kid_friendly, breaks = intervals))
abs_frequence

hist(kid_friendly, breaks = intervals, freq = TRUE,
     ylim = c(0, max(abs_frequence) + 8), col = c("red", "blue", "green", "orange"),
     border = "black", main = "Kid Friendly Attribute Frequencies",
     xlab = "Kid Friendly Values", ylab = "Absolute Frequency")

kid_friendly_mean <- mean(kid_friendly, na.rm = TRUE)
kid_friendly_mean

# intelligence
intelligence <- data[, "Incredibly.Kid.Friendly.Dogs"]
intelligence

intervals <- c(1, 2, 3, 4, 5)
abs_frequence <- table(cut(intelligence, breaks = intervals))
abs_frequence

hist(intelligence, breaks = intervals, freq = TRUE,
     ylim = c(0, max(abs_frequence) + 17), col = c("red", "blue", "green", "orange"),
     border = "black", main = "Kid Friendly Attribute Frequencies",
     xlab = "Kid Friendly Values", ylab = "Absolute Frequency")

intelligence_mean <- mean(intelligence, na.rm = TRUE)
intelligence_mean

# dog friendly
dog_friendly <- data[, "Incredibly.Kid.Friendly.Dogs"]
dog_friendly

intervals <- c(1, 2, 3, 4, 5)
abs_frequence <- table(cut(dog_friendly, breaks = intervals))
abs_frequence

hist(dog_friendly, breaks = intervals, freq = TRUE,
     ylim = c(0, max(abs_frequence) + 17), col = c("red", "blue", "green", "orange"),
     border = "black", main = "Kid Friendly Attribute Frequencies",
     xlab = "Kid Friendly Values", ylab = "Absolute Frequency")

dog_friendly_mean <- mean(dog_friendly, na.rm = TRUE)
dog_friendly_mean


# Amount of shadding (max, min) - breeds
amount_of_shedding <- data[, "Amount.Of.Shedding"]
amount_of_shedding_max <- max(amount_of_shedding, na.rm = TRUE)
amount_of_shedding_min <- min(amount_of_shedding, na.rm = TRUE)

df <- data.frame(
  breed = data[, "Breed"],
  shedding = data[, "Amount.Of.Shedding"]
)

breeds_with_highest_shedding <- c()
breeds_with_lowest_shedding <- c()
for (i in 1:nrow(df)){
  breed <- df$breed[i]
  shedding <- df$shedding[i]
  if (shedding == amount_of_shedding_max)
    breeds_with_highest_shedding <- c(breeds_with_highest_shedding, breed)
  else if (shedding == amount_of_shedding_min)
    breeds_with_lowest_shedding <- c(breeds_with_lowest_shedding, breed)
}

print(breeds_with_highest_shedding)
print(breeds_with_lowest_shedding)


# Tolerates Cold Weather (max, min) - breeds
tolerates_cold_weather <- data[, "Tolerates.Cold.Weather"]
tolerates_cold_weather_max <- max(tolerates_cold_weather, na.rm = TRUE)
tolerates_cold_weather_min <- min(tolerates_cold_weather, na.rm = TRUE)

df <- data.frame(
  breed = data[, "Breed"],
  cold = data[, "Tolerates.Cold.Weather"]
)

breeds_with_highest_cold <- c()
breeds_with_lowest_cold <- c()
for (i in 1:nrow(df)){
  breed <- df$breed[i]
  cold <- df$cold[i]
  if (cold == tolerates_cold_weather_max)
    breeds_with_highest_cold <- c(breeds_with_highest_cold, breed)
  else if (cold == tolerates_cold_weather_min)
    breeds_with_lowest_cold <- c(breeds_with_lowest_cold, breed)
}

print(breeds_with_highest_cold)
print(breeds_with_lowest_cold)


# Tolerates Hot Weather (max, min) - breeds
tolerates_hot_weather <- data[, "Tolerates.Hot.Weather"]
tolerates_hot_weather_max <- max(tolerates_hot_weather, na.rm = TRUE)
tolerates_hot_weather_min <- min(tolerates_hot_weather, na.rm = TRUE)

df <- data.frame(
  breed = data[, "Breed"],
  hot = data[, "Tolerates.Hot.Weather"]
)

breeds_with_highest_hot <- c()
breeds_with_lowest_hot <- c()
for (i in 1:nrow(df)){
  breed <- df$breed[i]
  hot <- df$hot[i]
  if (hot == tolerates_hot_weather_max)
    breeds_with_highest_hot <- c(breeds_with_highest_hot, breed)
  else if (hot == tolerates_hot_weather_min)
    breeds_with_lowest_hot <- c(breeds_with_lowest_hot, breed)
}

print(breeds_with_highest_hot)
print(breeds_with_lowest_hot)




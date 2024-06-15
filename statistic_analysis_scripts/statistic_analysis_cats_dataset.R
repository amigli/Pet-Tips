#________________________________________________________________________
#                           OPERAZIONI PRELIMINARI
#________________________________________________________________________

library(utils)

#Si legge il file Excel
data <- read.csv("../dataset/cleaned_datasets/cat_breeds.csv")
View(data)

#________________________________________________________________________
#                             ANALISI IN COMUNE
#________________________________________________________________________

#_______________________Attributo 'family_friendly'______________________

#Leggo i valori dell'attributo dal dataset
family_friendly <- data[, 'family_friendly']
family_friendly

#Si calcolano le frequenze assolute per intervalli
intervalli <- c(1, 2, 3, 4, 5)
frequenzeA <- table(cut(family_friendly, breaks = intervalli))
frequenzeA

#Si crea l'istogramma
hist(family_friendly, breaks = intervalli, freq = TRUE,
     ylim = c(0, max(frequenzeA)+5),
     col = c("red", "blue", "green", "orange"), border = "black",
     main = "family_friendly attribute frequencies",
     xlab = "Family friendly values",
     ylab = "Absolute Frequency")

#Si calcola la media
media <- mean(family_friendly)
media

#____________________Attributo 'max_life_expectancy'______________________

#Leggo i valori dell'attributo dal dataset
longevity_year_media <- data[, 'max_life_expectancy']
longevity_year_media

#Media
media <- mean(longevity_year_media, na.rm = TRUE)
media

#________________________Attributo 'playfulness'_______________________

#Leggo i valori dell'attributo dal dataset
playfulness <- data[, 'playfulness']
playfulness

#Si calcolano le frequenze assolute per intervalli
intervalli <- c(1, 2, 3, 4, 5)
frequenzeA <- table(cut(playfulness, breaks = intervalli))
frequenzeA

#Si crea l'istogramma
hist(playfulness, breaks = intervalli, freq = TRUE,
     ylim = c(0, max(frequenzeA)+5),
     col = c("red", "blue", "green", "orange"), border = "black",
     main = "playfulness attribute frequencies",
     xlab = "Playfulness values",
     ylab = "Absolute Frequency")

#Si calcola la media
media <- mean(playfulness, na.rm = TRUE)
media

#____________________Attributo 'children_friendly'______________________

#Leggo i valori dell'attributo dal dataset
kid_friendly <- data[, 'children_friendly']
kid_friendly

#Si calcolano le frequenze assolute per intervalli
intervalli <- c(1, 2, 3, 4, 5)
frequenzeA <- table(cut(kid_friendly, breaks = intervalli))
frequenzeA

#Si crea l'istogramma
hist(kid_friendly, breaks = intervalli, freq = TRUE,
     ylim = c(0, max(frequenzeA)+5),
     col = c("red", "blue", "green", "orange"), border = "black",
     main = "children_friendly attribute frequencies",
     xlab = "Children friendly values",
     ylab = "Absolute Frequency")

#Si calcola la media
media <- mean(kid_friendly, na.rm = TRUE)
media

#______________________Attributo 'intelligence'______________________

#Leggo i valori dell'attributo dal dataset
intelligence <- data[, 'intelligence']
intelligence

#Si calcolano le frequenze assolute per intervalli
intervalli <- c(1, 2, 3, 4, 5)
frequenzeA <- table(cut(intelligence, breaks = intervalli))
frequenzeA

#Si crea l'istogramma
hist(intelligence, breaks = intervalli, freq = TRUE,
     ylim = c(0, max(frequenzeA)+5),
     col = c("red", "blue", "green", "orange"), border = "black",
     main = "intelligence attribute frequencies",
     xlab = "intelligence values",
     ylab = "Absolute Frequency")

#Si calcola la media
media <- mean(intelligence, na.rm = TRUE)
media

#________________________________________________________________________
#                           ANALISI GATTI
#________________________________________________________________________

#__________________________Attributo 'shedding'__________________________

#Leggo i valori dell'attributo nel dataset
shedding <- data[, c('Breed', 'shedding')]
View(shedding)

#Seleziono le righe in cui 'shedding' vale 1 (razze meno diffuse)
shedding_breed_1 <- shedding[shedding$shedding == 1, ]
shedding_breed_1

#Seleziono le righe in cui 'shedding' vale 5 (razze più diffuse)
shedding_breed_5 <- shedding[shedding$shedding == 5, ]
shedding_breed_5

#__________________________Attributo 'origin'__________________________

#Leggo i valori dell'attributo nel dataset
origin <- data[, 'origin']
origin

#Calcolo le frequenze assolute (15 sono i valori null)
freq_origin <- table(origin)
freq_origin

# Creo un grafico a barre orizzontale con i nomi dei paesi e le frequenze
#assolute sull'asse X
barplot(freq_origin,
        xlim = c(0, max(freq_origin) + 5),
        col = c("red", "blue", "green", "orange"),
        border = "black",
        main = "Frequenza dei Paesi",
        ylab = "Paesi",
        xlab = "Frequenza Assoluta",
        horiz = TRUE,
        las = 1,
        cex.names = 0.8)

# Aggiungo le etichette dei paesi a destra delle barre
text(x = freq_origin + 0.5,
     y = barplot(freq_origin, plot = FALSE),
     label = names(freq_origin),
     pos = 4,
     cex = 0.8,
     col = "black")

#_____________________Attributo 'other_pets_friendly'____________________

#Leggo i valori dell'attributo dal dataset
other_pets_friendly <- data[, 'other_pets_friendly']
other_pets_friendly

#Si calcolano le frequenze assolute per intervalli
intervalli <- c(1, 2, 3, 4, 5)
frequenzeA <- table(cut(other_pets_friendly, breaks = intervalli))
frequenzeA

#Si crea l'istogramma
hist(other_pets_friendly, breaks = intervalli, freq = TRUE,
     ylim = c(0, max(frequenzeA)+5),
     col = c("red", "blue", "green", "orange"), border = "black",
     main = "other_pets_friendly attribute frequencies",
     xlab = "Other pets friendly values",
     ylab = "Absolute Frequency")

#Si calcola la media
media <- mean(other_pets_friendly, na.rm = TRUE)
media

#Leggo i valori dell'attributo nel dataset
other_pets_friendly <- data[, c('Breed', 'other_pets_friendly')]
View(other_pets_friendly)

#Seleziono le righe in cui 'other_pets_friendly' vale 2 (razze meno cordiali con gli altri animali)
other_pets_friendly_breed_2 <- other_pets_friendly[other_pets_friendly$other_pets_friendly == 2, ]
other_pets_friendly_breed_2

#Seleziono le righe in cui 'other_pets_friendly' vale 5 (razze più cordiali con gli altri animali)
other_pets_friendly_breed_5 <- other_pets_friendly[other_pets_friendly$other_pets_friendly == 5, ]
other_pets_friendly_breed_5

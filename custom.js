// Mise à jour des heures de vérification
function updateCheckTimes() {
  try {
    // Calculer les heures basées sur l'intervalle de 5 minutes
    const now = new Date()
    const lastCheck = new Date(now.getTime() - 5 * 60 * 1000)
    const nextCheck = new Date(now.getTime() + 5 * 60 * 1000)

    const lastCheckElement = document.getElementById('last-check')
    const nextCheckElement = document.getElementById('next-check')

    if (lastCheckElement && nextCheckElement) {
      lastCheckElement.textContent = lastCheck.toLocaleString('fr-FR')
      nextCheckElement.textContent = nextCheck.toLocaleString('fr-FR')
    }
  } catch (error) {
    console.log('Erreur lors de la mise à jour:', error)
  }
}

// Mettre à jour toutes les minutes
setInterval(updateCheckTimes, 60000)
updateCheckTimes()

// Update check times with real data from Upptime
async function updateCheckTimes() {
  try {
    // Fetch real data from GitHub Raw
    const response = await fetch(
      'https://raw.githubusercontent.com/pyleglise/upptimeMonitor/master/history/axialdata.yml',
    )
    const yamlText = await response.text()

    // Extract lastUpdated from YAML
    const lastUpdatedMatch = yamlText.match(/lastUpdated:\s*(.+)/)
    if (lastUpdatedMatch) {
      const lastCheckTime = new Date(lastUpdatedMatch[1])

      // Calculate next check (5 minutes after the last one)
      const nextCheckTime = new Date(lastCheckTime.getTime() + 5 * 60 * 1000)

      const lastCheckElement = document.getElementById('last-check')
      const nextCheckElement = document.getElementById('next-check')

      if (lastCheckElement && nextCheckElement) {
        lastCheckElement.textContent = lastCheckTime.toLocaleString('fr-FR')
        nextCheckElement.textContent = nextCheckTime.toLocaleString('fr-FR')
      }
    }
  } catch (error) {
    console.log('Error fetching data:', error)
  }
}

// Mettre à jour toutes les minutes
setInterval(updateCheckTimes, 60000)
updateCheckTimes()

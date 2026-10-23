import { useState, useEffect, useMemo } from 'react'
import seedData from '../data/githubContributions.json'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(Date.UTC(year, month - 1, day))
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default function Activity() {
  const [data, setData] = useState(seedData)

  useEffect(() => {
    let cancelled = false
    fetch('https:
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions')
        return res.json()
      })
      .then((fresh) => {
        if (!cancelled && fresh?.contributions?.length) {
          setData(fresh)
        }
      })
      .catch(() => {
        
      })

    return () => {
      cancelled = true
    }
  }, [])

  
  const { weeks, monthLabels } = useMemo(() => {
    const list = data?.contributions || []
    const cols = []
    let current = []

    for (let i = 0; i < list.length; i++) {
      current.push(list[i])
      if (current.length === 7) {
        cols.push(current)
        current = []
      }
    }
    if (current.length > 0) {
      cols.push(current)
    }

    
    const months = {}
    let lastMonth = -1
    cols.forEach((col, idx) => {
      if (!col[0]?.date) return
      const [year, month, day] = col[0].date.split('-').map(Number)
      const d = new Date(Date.UTC(year, month - 1, day))
      const m = d.getUTCMonth()
      if (m !== lastMonth) {
        months[idx] = d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })
        lastMonth = m
      }
    })

    return { weeks: cols, monthLabels: months }
  }, [data])

  return (
    <section id="activity" className="section">
      <div className="section-head">
        <h2 className="section-label">Activity</h2>
        <p className="section-desc">
          GitHub contributions over the last year.
        </p>
      </div>

      <div className="heatmap-wrapper">
        <div className="heatmap-scroll">
                    <div className="heatmap-months-row">
            {weeks.map((_, idx) => (
              <div key={idx} className="heatmap-month-slot">
                {monthLabels[idx] && (
                  <span className="heatmap-month-label">{monthLabels[idx]}</span>
                )}
              </div>
            ))}
          </div>

                    <div className="heatmap-grid" role="grid" aria-label="Contribution Activity">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="heatmap-week-col">
                {week.map((day) => {
                  const tooltip = `${day.count === 0 ? 'No' : day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)}`
                  return (
                    <div
                      key={day.date}
                      className={`heatmap-cell level-${day.level ?? 0}`}
                      title={tooltip}
                      aria-label={tooltip}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>

                <div className="heatmap-legend">
          <span className="legend-label">less</span>
          <div className="legend-cells">
            <span className="heatmap-cell level-0" aria-hidden="true" />
            <span className="heatmap-cell level-1" aria-hidden="true" />
            <span className="heatmap-cell level-2" aria-hidden="true" />
            <span className="heatmap-cell level-3" aria-hidden="true" />
            <span className="heatmap-cell level-4" aria-hidden="true" />
          </div>
          <span className="legend-label">more</span>
        </div>
      </div>
    </section>
  )
}

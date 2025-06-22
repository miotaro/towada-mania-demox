'use client'
import { useState, useEffect } from 'react';

type TabButton = {
  id: string;
  label: string;
};

type TabPanelProps = {
  className?: string;
  tabButtons: TabButton[];
  defaultTabId?: string;
  children: React.ReactNode;
}

export default function TabPanel({
  className = '',
  tabButtons,
  defaultTabId,
  children,
}: TabPanelProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabButtons[0]?.id);

  useEffect(() => {
    const currentPanel = document.querySelector(`[data-tab-id="${activeTab}"]`) as HTMLElement;
    if (currentPanel) {
      const height = currentPanel.offsetHeight;
      currentPanel.style.setProperty('--panel-h', `${height}px`);
    }
  }, [activeTab]);

  return (
    <>
      <div className={`${className} gutter-container`}>
        <div className="swich-tab-list tab-list">
          {tabButtons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              className={`tab-btn js-tab-btn ${activeTab === btn.id ? 'is-tab-current' : ''}`}
              onClick={() => setActiveTab(btn.id)}
              data-tab-id={btn.id}
            >
              <span className='_text'>{btn.label}</span>
            </button>
          ))}
        </div>

        <div className="tab-panels">
          {Array.isArray(children) &&
            children.map((child, index) => {
              const tabId = tabButtons[index]?.id;
              if (!tabId) return null;

              const isActive = tabId === activeTab;
              return (
                <div
                  key={tabId}
                  className={`js-tab-panel ${isActive ? 'is-tab-current is-fade' : ''}`}
                  data-tab-id={tabId}
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  {child}
                </div>
              );
            })}
        </div>
      </div>
    </>
  )
}
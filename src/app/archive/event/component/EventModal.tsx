'use client'
import { useModalStore } from "@/store/modalStore";
import { useEventDateStore } from "@/store/selectedEventStore";
import { eventData } from "@/data/eventData";
import { useState, useEffect } from "react";

export default function EventModal() {
  const isOpen = useModalStore((state) => state.modals.event);
  const close = useModalStore((state) => state.close);
  const selectedDate = useEventDateStore((state) => state.selectedEventDate);

  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (isOpen) {
      console.log(isOpen);
      setShow(true);
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!selectedDate) return null;
  const eventForDate = eventData.find(event => event.date === selectedDate);
  if (!eventForDate || !isOpen) return null;
  const [month, day] = selectedDate.split("-").slice(1);

  return (
    <>
      <div
        className={`modal-overlay is-folder ${animate ? 'is-show' : ''}`}
        onClick={() => close('event')}
        tabIndex={-1}
      />
      <div
        className={`modal event-modal ${animate ? 'is-open' : ''}`}
        data-modal-id={selectedDate}
        aria-hidden={show ? 'false' : 'true'}
      >
        <div className="modal-body fade">
          <button
            type="button"
            className="modal-close js-modal-close"
            onClick={() => close('event')}
          >
            <svg viewBox="0 0 14 14"><use href="#cross"></use></svg>
          </button>
          <div className="modal-body__inner mcdots-bg --orange">
            <div className="event-modal__content">
              <div className="event-modal__label phdc-bg --orange">
                <p className="_text">EVENT LIST</p>
              </div>

              <div className="event-modal__date">
                <time className="_time" dateTime={eventForDate.date}>
                  {month}<span>/</span>{day}
                </time>
                <span className="_dow">{eventForDate.dow}</span>
              </div>

              <div className="article-list">
                {eventForDate.events.map((event, i) => (
                  <article className="article-card --card-sm" key={i}>
                    <a className="article-card__link" href={event.href || '#'}>
                      <figure className="article-card__thumb">
                        <img
                          className="u-cover-img"
                          src={event.image}
                          width="100%"
                          height="auto"
                          alt=""
                        />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">{event.title}</h2>
                        <p className="article-card__time">
                          <svg className="_icon" viewBox="0 0 18 18">
                            <use href="#icon-clock" />
                          </svg>
                          <time dateTime={event.startTime}>
                            {event.startTime.split(' ')[1]}
                          </time>
                          〜
                          <time dateTime={event.endTime}>
                            {event.endTime.split(' ')[1]}
                          </time>
                        </p>
                      </div>
                      <div className="article-card__tags">
                        {event.tags.map((tag, j) => (
                          <span className="_tag" key={j}>{tag}</span>
                        ))}
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
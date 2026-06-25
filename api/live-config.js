export default function handler(req, res) {
  const date         = process.env.LIVE_DATE         || null;
  const time         = process.env.LIVE_TIME         || '20:00';
  const title        = process.env.LIVE_TITLE        || 'A aula começa em';
  const showPromoNote = process.env.SHOW_PROMO_NOTE  !== 'false';

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ date, time, title, showPromoNote });
}

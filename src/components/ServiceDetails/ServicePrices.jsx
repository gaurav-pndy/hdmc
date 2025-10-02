const priceSections = [
  {
    title: "Organization of a consultation with an oncology surgeon:",
    rows: [
      ["Nechushkina Valentina Mikhailovna (full-time/remote)", "15,000 ₽"],
      ["Gimranov Albert Minusagitovich (full-time/remote)", "15,000 ₽"],
      ["Subramanian Somasundaram (Dr. Soma) (full-time/remote)", "25,000 ₽"],
      ["Kochatkov Alexander Vladimirovich (full-time/remote)", "15,000 ₽"],
      ["Kuzmichev Dmitry Vladimirovich (full-time/remote)", "15,000 ₽"],
      ["Shemyatovsky Kirill Alexandrovich (full-time/remote)", "10,000 ₽"],
    ],
  },
  {
    title: "Organization of a chemotherapy consultation:",
    rows: [
      ["Kononenko Inessa Borisovna (remote)", "15,000 ₽"],
      ["Snegovoy Anton Vladimirovich (remote)", "15,000 ₽"],
      ["Sinyavin Dmitry Yurievich (remote/full-time)", "15 000 ₽ / 8 000 ₽"],
    ],
  },
  {
    title:
      "Organization of a consultation with a radiotherapist or oncologist:",
    rows: [["Dzhugashvili Maya Shalikoevna (remote)", "25,000 ₽"]],
  },
  {
    title:
      "Organization of a consultation with an anesthesiologist-resuscitator:",
    rows: [["Prikhodchenko Alexey Olegovich (full-time/remote)", "15,000 ₽"]],
  },
];

const ServicePrices = () => (
  <div className="bg-white rounded-xl shadow p-8 mb-8">
    <h2 className="font-bold text-2xl text-brand1 mb-3">Цены</h2>
    {priceSections.map((section, idx) => (
      <div key={idx} className="mb-6">
        <div className="font-semibold text-lg mb-3 text-brand1">
          {section.title}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-1">
            <tbody>
              {section.rows.map((row, rIdx) => (
                <tr className="bg-brand4/10 rounded" key={rIdx}>
                  <td className="py-2 px-4 rounded-l">{row[0]}</td>
                  <td className="py-2 px-4 font-bold text-brand1 rounded-r text-right whitespace-nowrap">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

export default ServicePrices;

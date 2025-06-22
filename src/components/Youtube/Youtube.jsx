import "./Youtube.css"

const Youtube = () => {
  return (
    <div>
        <section class="video-container">
    <main class="text-wrapper">
        <h1>Meet Our Saver of the Month</h1>
        <p>Every month, we shine a spotlight on one saver, asking them about their savings culture and how Piggyvest has helped them.
        </p>
      </main>
      <div class="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2EnGMGxKuII?si=Gc_6Dar3Dcmi32m9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
    </div>
  )
}

export default Youtube

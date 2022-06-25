function Posts({data}) { // componente da pagina
    console.log('data', data) // renderiza na parte do componente
    return (
        <h1>Posts</h1>
    )
}

export async function getServerSideProps(context) {
    const data = [  //renderiza na parte do servidor
        {name: 'Gabriel'},
        {name: 'Gabriel'},
    ]
    return {
      props: {data}, // will be passed to the page component as props
    }
  }


export default Posts;
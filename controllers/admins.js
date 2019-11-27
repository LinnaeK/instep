module.exports ={
    index,
}

function index(req, res, next) {
    console.log('admin controller')
    res.render('admin/index',{
      user: req.user,
      name: req.query.name,
    })
  }
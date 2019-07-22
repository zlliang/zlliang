import { FunctionComponent } from 'react'

import { Section, SectionTitle } from './content'
import { color } from '../utils/variables'

const UsefulLinks: FunctionComponent = () => (
  <Section>
    <SectionTitle>Useful Links</SectionTitle>
    <ul id='useful-links'>
      <li>Journals and Presses</li>
      <ul id='journals'>
        <li>
          <a href='https://epubs.siam.org/loi/siread'>SIREV</a>{' '}
          <span className='description'>SIAM Review</span>
        </li>
        <li>
          <a href='https://epubs.siam.org/journal/sjmael'>SIMAX</a>{' '}
          <span className='description'>
            SIAM Journal on Matrix Analysis and Applications
          </span>
        </li>
        <li>
          <a href='https://epubs.siam.org/journal/sjoce3'>SISC</a>{' '}
          <span className='description'>
            SIAM Journal on Scientific Computing
          </span>
        </li>
        <li>
          <a href='https://toms.acm.org'>ACM TOMS</a>{' '}
          <span className='description'>
            ACM Transactions on Mathematical Software
          </span>
        </li>
        <li>
          <a href='https://csur.acm.org'>ACM CSUR</a>{' '}
          <span className='description'>ACM Computing Surveys</span>
        </li>
        <li>
          <a href='https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9739'>
            IEEE Communications Surveys & Tutorials
          </a>
        </li>
        <li>
          <a href='https://link.springer.com'>Springer Link</a>
        </li>
      </ul>
      <li>Homepages of scientists</li>
      <ul id='homepages-of-scientists'>
        <li>
          <a href='https://web.cs.ucdavis.edu/~bai/'>Zhaojun Bai</a>
        </li>
        <li>
          <a href='http://www.maths.manchester.ac.uk/~higham/'>
            Nicholas J. Higham
          </a>{' '}
          (and his <a href='https://nickhigham.wordpress.com'>blog</a>)
        </li>
        <li>
          <a href='https://crd-legacy.lbl.gov/~xiaoye/'>Xiaoye Sherry Li</a>
        </li>
        <li>
          <a href='http://www.cs.cornell.edu/cv/'>Charles F. Van Loan</a>
        </li>
      </ul>
      <li>Blogs</li>
      <ul id='blogs'>
        <li>
          <a href='https://overreacted.io'>Overreacted</a>{' '}
          <span className='description'>Personal blog by Dan Abramov</span>
        </li>
        <li>
          <a href='http://lucumr.pocoo.org'>
            Armin Ronacher’s Thoughts and Writings
          </a>
        </li>
        <li>
          <a href='https://boats.gitlab.io/blog/'>withoutboat’s blog</a>
        </li>
        <li>
          <a href='https://castel.dev'>Gilles Castel</a>
        </li>
      </ul>
      <li>Software documentations and tutorials</li>

      <ul id='docs'>
        <li>
          <a href='https://netlib.org'>Netlib</a>{' '}
          <span className='description'>
            Repository of <a href='https://netlib.org/blas'>BLAS</a> and{' '}
            <a href='https://netlib.org/lapack'>LAPACK</a>
          </span>
        </li>
        <li>
          <a href='http://www.openblas.net'>OpenBLAS</a> and{' '}
          <a href='https://software.intel.com/mkl'>Intel MKL</a>{' '}
          <span className='description'>Optimized implementations of BLAS</span>
        </li>
        <li>
          <a href='https://mathworks.com/help/'>MATLAB</a> (and the blog{' '}
          <a href='https://undocumentedmatlab.com/'>Undocumented MATLAB</a>)
        </li>
        <li>
          <a href='http://www.maths.manchester.ac.uk/our-research/research-groups/numerical-analysis-and-scientific-computing/numerical-analysis/software/nlevp/'>
            NLEVP
          </a>{' '}
          <span className='description'>
            A Collection of Nonlinear Eigenvalue Problems
          </span>
        </li>
        <li>
          <a href='https://math.nist.gov/MatrixMarket/'>Matrix Market</a> and{' '}
          <a href='https://sparse.tamu.edu'>SuiteSparse Matrix Collection</a>
        </li>
        <li>
          <a href='https://eigen.tuxfamily.org/'>Eigen</a> and{' '}
          <a href='http://arma.sourceforge.net'>Armadillo</a>{' '}
          <span className='description'>C++ linear algebra libraries</span>
        </li>
      </ul>
      <li>Miscellaneous articles and blog posts</li>
      <ul id='misc'>
        <li>
          <a href='http://www.linuxfromscratch.org'>Linux from scratch</a>
        </li>
        <li>
          <a href='https://pabloariasal.github.io/2018/02/19/its-time-to-do-cmake-right/'>
            It’s Time To Do CMake Right
          </a>
        </li>
        <li>
          <a href='https://cliutils.gitlab.io/modern-cmake/'>Modern CMake</a>
        </li>
        <li>
          <a href='https://ianstormtaylor.com/design-tip-never-use-black/'>
            Design Tip: Never Use Black
          </a>
        </li>
        <li>
          <a href='https://sspai.com/post/47092'>理解数字世界中的纸张：PDF</a>{' '}
          <span className='description'>(in Chinese)</span>
        </li>
        <li>
          <a href='https://nickhigham.wordpress.com/2018/08/21/tricks-and-tips-in-numerical-computing/'>
            Tricks and Tips in Numerical Computing
          </a>
        </li>
        <li>
          <a href='https://devblogs.nvidia.com/even-easier-introduction-cuda/'>
            An Even Easier Introduction to CUDA
          </a>
        </li>
        <li>
          <a href='http://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/'>
            Beautiful Native Libraries
          </a>
        </li>
        <li>
          <a href='https://devblogs.microsoft.com/cppblog/clear-functional-c-documentation-with-sphinx-breathe-doxygen-cmake/'>
            Clear, Functional C++ Documentation with Sphinx + Breathe + Doxygen
            + CMake
          </a>
        </li>
        <li>
          <a href='https://www.leiphone.com/news/201704/Puevv3ZWxn0heoEv.html'>
            OpenBLAS 项目与矩阵乘法优化
          </a>{' '}
          <span className='description'>(in Chinese)</span>
        </li>
        <li>
          <a href='https://coolshell.cn/articles/19219.html'>
            打造高效的工作环境 – SHELL 篇
          </a>{' '}
          <span className='description'>(in Chinese)</span>
        </li>
      </ul>
    </ul>
    <style jsx>{`
      .description {
        font-size: 0.9em;
        color: ${color.gray3};
      }
    `}</style>
  </Section>
)

export default UsefulLinks

import { Link } from 'react-router-dom'
import { bubblesIcon } from '../constants'
import CustomLink from './CustomLink'
import SVG from './SVG'

export default ({ thread }) => (
    <article className="flex items-center gap-1 rounded-xl bg-light-100 p-1 shadow-md dark:bg-mixed-800">
        <CustomLink to={`thread/${thread._id}`}>
            <SVG
                className="size-20 stroke-1 p-3 hover:text-mixed-600 dark:hover:text-light-500"
                d={bubblesIcon}
            />
        </CustomLink>
        <section>
            <div className="flex">
                <CustomLink
                    className="hover:text-mixed-600 dark:hover:text-light-500"
                    to={`thread/${thread._id}`}
                >
                    <h3>{thread.header}</h3>
                </CustomLink>
            </div>
            <p>
                by{' '}
                <Link
                    className="text-primary-500 hover:text-primary-300 dark:text-primary-100 dark:hover:text-primary-400"
                    to={`user/${thread.user}`}
                >
                    {thread.user}
                </Link>
            </p>
            <p>
                <time dateTime={new Date(thread.createdDate).toISOString()}>
                    {new Intl.DateTimeFormat('en-us', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                    }).format(new Date(thread.createdDate))}
                </time>
            </p>
        </section>
    </article>
)
